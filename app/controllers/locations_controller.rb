class LocationsController < ApplicationController
    skip_before_action :authorize, only: :index
    
    def index
        render json: Location.all 
    end

    def show 
        location = Location.find(params[:id])
        render json: location, status: :ok
    end

    def create
        location = Location.create!(location_params)
        render json: location, except: [:lodgings], status: :created
    end

    def update
        location = Location.find(params[:id])
        location.update!(location_params)
        render json: location, status: :accepted
    end

    def destroy
        location = Location.find(params[:id])
        location.destroy
        head :no_content
    end

    private

    def location_params
        params.permit(:name, :image, :description)
    end
end
