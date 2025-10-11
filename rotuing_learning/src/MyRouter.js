import React from 'react'

export default function MyRouter(props) {

  const {
    children
  } = props;

  const href = window.location.href
  const obj = new URL(href);
  const path = obj.pathname.substring(1);

  return (
    <div>
      <a href='home'> Home </a>
      <a href='usage'> Usage </a>
      <a href='settings'> Settings </a>
      <a href='chart'> Chart </a>

      {React.Children
        .toArray(children)
        .find((child) => child.props.path === path)}
    </div>
  )
}
