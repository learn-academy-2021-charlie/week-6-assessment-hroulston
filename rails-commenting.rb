# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# This is the controller called Blog Posts. It is the logical part of the app that manages the interaction between the user, the views and the model.
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # This index method will show all of the blog posts.
    @posts = BlogPost.all
  end

  def show
    # ---3)
    # This method will find a specific blog post. It has a parameter of an id which means it will show the blog post that matches the id of the argument given.
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # This method generates a form that allows the user to input data necessary to create a new blog post.
  def new
    @post = Post.new
  end

  def create
    # ---5)
    # This method actually adds the data to the blog post. If the data was added correctly it will send the user to the screen with the newly created post. If it is not created correctly it will reload the form that is generated with the new method. The create method is also passed a param that allows the user to alter specific items. In this instance it is the title and the content.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)
  # The edit method also provides a form so the user can change any information that is located in the blog post that matches the id of the argument given. The update method actively makes the changes to the blog post and replaces what was there with the user's input given in the edit method.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This specifically allows the user to only update the title and content (as specified in the private section below). If the update was done correctly then it is redirected to the blog post itself. If it wasn't then the edit form will be reloaded. The destroy method further below will delete a blog post whose id matches the one given in the argument. Once destroyed the user will get redirected to the index page that shows all of the blog posts.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) If the blog post was not properly deleted then the user the page will reload with the blog post that the user called upon to delete.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) This means that anything below cannot be altered by the user and will not interact with any of the above code unless specifically invoked.
  private
  def blog_post_params
    # ---10) The code below says that basically a specific blog post needs to be called upon and within that blog post the user is permitted to ONLY alter the title and the content of that post. 
    params.require(:blog_post).permit(:title, :content)
  end
end
