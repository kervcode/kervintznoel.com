import React, { useState } from 'react'
import styled from 'styled-components';
import Burger from './Burger';


const nav = styled.nav`
  background-color: #fff;
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

function Navbar() {
    return (
        <nav>
            <div className="logo">
                Kervintz Noel
            </div>
            <Burger />
        </nav>
    )
}

export default Navbar
