require.config({
  baseUrl: '/views/assets',
  paths: {
    jquery: './jquery/jquery',
    cookie: './jquery-cookie/jquery.cookie',
    template: './artTemplate/template',
    bootstrap: './bootstrap/js/bootstrap',
    utils: '../static/js/lib/utils',
    form: './jquery-form/jquery.form'
  },
  shim: {
    bootstrap: {
      deps: ['jquery']
    }
  }
})