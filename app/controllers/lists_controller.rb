class ListsController < ApplicationController

  def index
    @lists = List.all
  end

  def show
    @list = List.find(params[:id])
  end


  private

  def list_params
    params.require(:list).permit(:name)
  end
end
