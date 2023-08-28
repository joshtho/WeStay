class LocationsController < ApplicationController
    skip_before_action :authorize, only: [:index, :lodging_length]
    
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

    def search
        users = Location.all.map{|l| l.users}

        byebug
        locations = users.map{|user| user.username }
    end

    def lodging_length
        # byebug
        render json: Location.all.select{|l| l.lodgings.length >= params[:n].to_i}

    end

    # get all locations that have that amount of lodgings or greater 
    
    # locations = Location.all.select{|l| l.users.find_by(username: params[:username])}
    # locations = Location.all.where("location.users.username = ?", params[:username])
    # users = User.all.select{|user| user.username.downcase.include? (params[:username].downcase)}
    # locations = users.map{|user| user.locations}.flatten.uniq
    # User.find_by(username: params[:username]) = user
    # user.locations
    # User.
    # by using a username in the params i want to find all locations related to that username and return each location object

    private

    def location_params
        params.permit(:name, :image, :description)
    end
end
