class ApplicationController < Gditweb::ApplicationController
  protect_from_forgery with: :exception

  # Override plugin method. No need to set a mobile format
  skip_filter :set_mobile_format
end