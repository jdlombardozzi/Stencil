class PagesController < ApplicationController
  def index
    @articles = Gditweb::Article.all
  end

  def show
    send("page__#{params[:id]}") if respond_to?("page__#{params[:id]}")

    @id = params[:id]

    render :layout => false
  end

  def page__styleguide
  end
end