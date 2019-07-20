class ServicesController < ApiController
  before_action :set_service, only: [:show, :update, :destroy]

  # GET /services
  def index
    @services = Service.all

    render json: @services
  end

  # GET /services/1
  def show
    render json: @service
  end

  # PATCH/PUT /services/1
  def update
    if @service.update(service_params)
      render json: @service
    else
      render json: @service.errors, status: :unprocessable_entity
    end
  end

  # DELETE /services/1
  def destroy
    @service.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_service
      @service = Service.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def service_params
      params.require(:service).permit(:name, :order_id)
    end
end
