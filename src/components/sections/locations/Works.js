import React from 'react';

class Works extends React.Component {
  render() {
    const { title, description, svgContent } = this.props;

    return (
      <div className="card">
        <div className="container-card" dangerouslySetInnerHTML={{ __html: svgContent }} />
        <p className="card-title text-light">{title}</p>
        <p className="card-description">{description}</p>
      </div>
    );
  }
}

export default Works;

