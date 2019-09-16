class OrdersController < ApiController
  before_action :set_order, only: [:show, :update, :destroy]

  # GET /orders
  def index
    # binding.pry
    @orders = Order.all

    render json: @orders
  end

  # GET /orders/1
  def show
    render json: @order
  end

  # POST /orders
  def create

    customer = Customer.find_or_create_by(first_name: params[:order][:firstName], last_name: params[:order][:lastName])
    # @order = Order.new
    item = Item.find_by_name(params[:order][:item])
    service = Service.find_by_name(params[:order][:service])

    @order = customer.orders.build(item: item, service: service)

        binding.pry


    if @order.save
      render json: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /orders/1
  def update
    # binding.pry
    if @order.update(order_params)
      render json: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /orders/1
  def destroy
    @order.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def order_params
      params.require(:order).permit(:customer_id, :service_id, :item_id, :status)
    end
end
