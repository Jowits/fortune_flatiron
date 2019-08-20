class Api::V1::UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def create
        user = User.find_by(username: params[:username])
        
        if user
        render json: user
        else
        user = User.create(username: params[:username])
        render json: user
        end
    end



end
