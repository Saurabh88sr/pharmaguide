import React, { Component } from "react";
export class News extends Component{
  render(){
    let {title, description, imagUrl}=this.props;
  return (
    <div>
      <div className="p-4 card">
              <div ClassName=" p-3 card">
                <img src={imagUrl} ClassName="card-img-top" alt="..." />
                <div ClassName="card-body">
                  <h5 ClassName="card-title">{title}</h5>
                  <p ClassName="card-text">{description}</p>
                  <a href="/" ClassName="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
      </div>
    </div>
  );
  }
};

export default News;
