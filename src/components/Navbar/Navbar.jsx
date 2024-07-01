import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaBars } from 'react-icons/fa'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import './nav.css'
const items = [
    {
        label: <a href="https://www.antgroup.com">IAN BOARD</a>,
        key: '0',
    },
    {
        label: <a href="https://www.aliyun.com">Philosophy</a>,
        key: '1',
    },

];

const Navbar = () => {
    
const navItems = [
    {
        label: <a href="">Alpha Fund</a>,
        key: '0',
    },
    {
        label: <a href="https://www.aliyun.com">BIO ANGELS</a>,
        key: '1',
    },

];
    const navRef = useRef();


    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <Link to='/'><img src='https://iangroup.vc/wp-content/uploads/2022/07/IAN-Logo.png' className="logo" /></Link>
            <nav ref={navRef}>
                <Link className='navlink' to="/">Home</Link>
                <Link className='navlink' to="/resoures">Resources</Link>
                <Dropdown
                    menu={{
                        items,
                    }}
                    trigger={['click']} className='navlink' style={{cursor:'pointer'}}
                >
                    <a className='navlink' onClick={(e) => e.preventDefault()}>
                        <Space className='navlink' style={{cursor:'pointer'}}>
                        IAN Group 1
                            <DownOutlined style={{cursor:'pointer'}} />
                        </Space>
                    </a>
                </Dropdown>
                <Dropdown
                    menu={{
                        items,
                    }}
                    trigger={['click']} className='navlink' style={{cursor:'pointer'}}
                >
                    <a className='navlink' onClick={(e) => e.preventDefault()}>
                        <Space className='navlink' style={{cursor:'pointer'}}>
                        IAN Group 1
                            <DownOutlined style={{cursor:'pointer'}} />
                        </Space>
                    </a>
                </Dropdown>
                
                <Link className='navlink' to="/contact">Contact US</Link>
                <Dropdown
                    menu={{
                        items,
                    }}
                    trigger={['click']} className='navlink' style={{cursor:'pointer'}}
                >
                    <a className='navlink' onClick={(e) => e.preventDefault()}>
                        <Space className='navlink' style={{cursor:'pointer'}}>
                        IAN Group 1
                            <DownOutlined style={{cursor:'pointer'}} />
                        </Space>
                    </a>
                </Dropdown>
            
                <button className='navbtn nav-close' onClick={showNavbar}>
                    <FaTimes />
                </button>
                
            </nav>
            {/* <Dropdown
                    menu={{
                        navItems,
                    }}
                    trigger={['click']} className='navlink' style={{cursor:'pointer'}}
                >
                    <a className='navlink' onClick={(e) => e.preventDefault()}>
                        <Space className='navlink' style={{cursor:'pointer'}}>
                        <FaBars color='red' />
                        </Space>
                    </a>
                </Dropdown> */}
            
            <button className='navbtn ' onClick={showNavbar}>
                <FaBars color='red' />
            </button>
        </header>
    )
}

export default Navbar
