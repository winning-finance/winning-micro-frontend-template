const { src, dest, series } = require('gulp')
const execa = require('execa')
const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const proxy = require('koa-proxies')
const del = require('del')

const distPath = path.resolve(process.cwd(), 'dist')
const packagesDir = path.resolve(__dirname, './packages')
const files = fs.readdirSync(packagesDir).filter(file => !file.startsWith('.'))

function execaShell (command, cwd) {
  return execa.command(command, {
    stdout: 'inherit',
    cwd
  })
}

const start = function () {
  const promises = []
  for (const app of files) {
    const packagePath = path.resolve(packagesDir, app)
    promises.push(execaShell('npm run serve', packagePath))
  }
  promises.push(execa(require.resolve('winning-web-his-main/bin/server'), {
    stdout: 'inherit'
  }))

  return Promise.all(promises)
}

const clear = function () {
  return del([distPath])
}

const buildPackages = async function () {
  for (const app of files) {
    const packagePath = path.resolve(packagesDir, app)
    await execaShell('npm run build', packagePath)
    src(`${path.join(packagePath, 'dist')}/**`)
      .pipe(dest(
        path.join(
          process.cwd(),
          app === 'main' ? 'dist' : `dist/${app}`
        )
      ))
  }
}

const install = async function () {
  await execaShell('lerna bootstrap')
}

const prodTest = async function () {
  const app = new Koa()
  const cors = require('@koa/cors')

  app.use(cors())
  app.use(require('koa-static')(distPath))
  app.use(proxy('/finance-common', {
    target: 'http://172.16.6.213',
    logs: true
  }))
  app.use(proxy('/web-public', {
    target: 'http://172.16.6.213',
    logs: true
  }))
  app.listen(9527)
  console.log('app listen at http://localhost:9527')
}

exports.start = start

exports.release = series(clear, install, buildPackages)

exports.releaseTest = series(clear, buildPackages, prodTest)
