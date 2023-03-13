class LodgingsController < ApplicationController
    def index
        render json: Lodging.all
    end

    def show 
        lodging = Lodging.find(params[:id])
        render json: lodging, status: :ok
    end

    def create
        lodging = Lodging.create!(lodging_params)
        render json: lodging, status: :created
    end

    def update
        lodging = Lodging.find(params[:id])
        lodging.update!(lodging_params)
        render json:lodging, status: :accepted
    end

    def destroy
        lodging = Lodging.find(params[:id])
        lodging.destroy
        head :no_content
    end

    private

    def lodging_params
        params.permit(:link, :image, :season, :guests, :dates)
    end
end
