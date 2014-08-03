Package.describe({
  summary: "Isotope package"
});

Package.on_use(function (api, where) {
  api.use(['jquery'], 'client');

  api.add_files('meteor-isotope.js', 'client');
});