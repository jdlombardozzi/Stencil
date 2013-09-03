class PagesController < ApplicationController
  # Essentially just a shell of an iframe
  def index; end

  # Dynamically checks for a method related to the page id and then renders the page
  # Will mostly be show through the index iframe
  def show
    send("page__#{params[:id]}") if respond_to?("page__#{params[:id]}")

    @id = params[:id]

    render :layout => false
  end

  def page__pages; end
end