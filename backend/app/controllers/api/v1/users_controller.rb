class Api::V1::UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    # def create
    #     user = User.create(params[:id])
    # end



end
