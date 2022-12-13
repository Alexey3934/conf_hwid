// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails


//= require jquery
//= require jquery_ujs





import "@hotwired/turbo-rails"
import "controllers"

globalThis.X_CSRF_Token = $('meta[name="csrf-token"]').attr('content')