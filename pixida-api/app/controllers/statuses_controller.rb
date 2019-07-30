class StatusesController < ApplicationController
  def index
    @statuses = Status.all

    render json: @statuses
  end

  def show
    render json: @status
  end
end
