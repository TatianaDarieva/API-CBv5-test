module.exports = {
  require: ['@babel/register'],
  timeout: '5000',
  spec: 'specs/**/*.js',
  ignore: '*/example.spec.js',
  file: 'project-config/auth-global-hook.js',
}
