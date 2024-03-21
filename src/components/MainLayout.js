import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import {
  AiOutlineBgColors,
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';
import { BiCategoryAlt, BiUserCircle } from 'react-icons/bi';
import { FaBloggerB, FaClipboardList } from 'react-icons/fa';
import { ImBlog } from 'react-icons/im';
import { RiCouponLine } from 'react-icons/ri';
import { SiBrandfolder } from 'react-icons/si';
import { Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './PrivateRoute';
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage?.getItem('user'));

  return (
    <PrivateRoute>
      <Layout /* onContextMenu={(e) => e.preventDefault()} */>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{ background: '#001529' }}
        >
          <div className="logo">
            <h2 className="text-white fs-5 text-center py-2 mb-0">
              <span className="sm-logo">
                <svg
                  width="177"
                  height="48"
                  viewBox="0 0 177 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM36 24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24ZM24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z"
                    fill="white"
                  />
                  <path
                    d="M68.016 12.544C69.7547 12.544 71.3013 12.896 72.656 13.6C74.0213 14.2933 75.12 15.2427 75.952 16.448C76.7947 17.6533 77.2907 19.0133 77.44 20.528H72.544C72.3947 19.728 72.1227 19.0187 71.728 18.4C71.3333 17.7707 70.816 17.28 70.176 16.928C69.536 16.5653 68.768 16.384 67.872 16.384C66.7947 16.384 65.8667 16.6453 65.088 17.168C64.3093 17.6907 63.712 18.5333 63.296 19.696C62.88 20.8587 62.672 22.3947 62.672 24.304C62.672 27.184 63.1307 29.2693 64.048 30.56C64.976 31.84 66.2507 32.48 67.872 32.48C68.768 32.48 69.536 32.2773 70.176 31.872C70.816 31.456 71.3333 30.912 71.728 30.24C72.1227 29.5573 72.3947 28.8107 72.544 28H77.44C77.3013 29.0987 77.0347 30.1493 76.64 31.152C76.2453 32.144 75.6853 33.0293 74.96 33.808C74.2347 34.5867 73.3013 35.2 72.16 35.648C71.0187 36.096 69.6373 36.32 68.016 36.32C65.8613 36.32 64 35.8187 62.432 34.816C60.864 33.8133 59.6533 32.4053 58.8 30.592C57.9573 28.7787 57.536 26.6613 57.536 24.24C57.536 21.808 57.9573 19.7227 58.8 17.984C59.6427 16.2347 60.848 14.8907 62.416 13.952C63.984 13.0133 65.8507 12.544 68.016 12.544ZM80.9208 12.864H85.6248V32.048H95.6728V36H80.9208V12.864ZM98.7495 12.864H103.406V36H98.7495V12.864ZM117.377 12.544C119.116 12.544 120.663 12.896 122.017 13.6C123.383 14.2933 124.481 15.2427 125.313 16.448C126.156 17.6533 126.652 19.0133 126.801 20.528H121.905C121.756 19.728 121.484 19.0187 121.089 18.4C120.695 17.7707 120.177 17.28 119.537 16.928C118.897 16.5653 118.129 16.384 117.233 16.384C116.156 16.384 115.228 16.6453 114.449 17.168C113.671 17.6907 113.073 18.5333 112.657 19.696C112.241 20.8587 112.033 22.3947 112.033 24.304C112.033 27.184 112.492 29.2693 113.409 30.56C114.337 31.84 115.612 32.48 117.233 32.48C118.129 32.48 118.897 32.2773 119.537 31.872C120.177 31.456 120.695 30.912 121.089 30.24C121.484 29.5573 121.756 28.8107 121.905 28H126.801C126.663 29.0987 126.396 30.1493 126.001 31.152C125.607 32.144 125.047 33.0293 124.321 33.808C123.596 34.5867 122.663 35.2 121.521 35.648C120.38 36.096 118.999 36.32 117.377 36.32C115.223 36.32 113.361 35.8187 111.793 34.816C110.225 33.8133 109.015 32.4053 108.161 30.592C107.319 28.7787 106.897 26.6613 106.897 24.24C106.897 21.808 107.319 19.7227 108.161 17.984C109.004 16.2347 110.209 14.8907 111.777 13.952C113.345 13.0133 115.212 12.544 117.377 12.544ZM139.898 36.32C137.711 36.32 135.818 35.8453 134.218 34.896C132.629 33.936 131.397 32.576 130.522 30.816C129.658 29.0453 129.226 26.9333 129.226 24.48C129.226 22.016 129.663 19.8933 130.538 18.112C131.423 16.3307 132.666 14.96 134.266 14C135.866 13.0293 137.743 12.544 139.898 12.544C142.042 12.544 143.909 13.024 145.498 13.984C147.087 14.944 148.314 16.3147 149.178 18.096C150.053 19.8773 150.49 22.0053 150.49 24.48C150.49 26.9227 150.058 29.0293 149.194 30.8C148.341 32.5707 147.119 33.936 145.53 34.896C143.941 35.8453 142.063 36.32 139.898 36.32ZM139.898 32.48C141.029 32.48 142.005 32.2133 142.826 31.68C143.658 31.136 144.298 30.2827 144.746 29.12C145.194 27.9467 145.418 26.4213 145.418 24.544C145.418 22.6133 145.189 21.0507 144.73 19.856C144.282 18.6613 143.642 17.7867 142.81 17.232C141.989 16.6667 141.018 16.384 139.898 16.384C138.778 16.384 137.802 16.6667 136.97 17.232C136.138 17.7867 135.493 18.6667 135.034 19.872C134.575 21.0667 134.346 22.624 134.346 24.544C134.346 26.432 134.575 27.9573 135.034 29.12C135.493 30.2827 136.138 31.136 136.97 31.68C137.802 32.2133 138.778 32.48 139.898 32.48ZM169.17 12.864H173.842V36H169.634L158.642 20.08V36H153.986V12.864H158.61L169.17 28.176V12.864Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="lg-logo">
                <svg
                  width="177"
                  height="48"
                  viewBox="0 0 177 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM36 24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24ZM24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z"
                    fill="white"
                  />
                  <path
                    d="M68.016 12.544C69.7547 12.544 71.3013 12.896 72.656 13.6C74.0213 14.2933 75.12 15.2427 75.952 16.448C76.7947 17.6533 77.2907 19.0133 77.44 20.528H72.544C72.3947 19.728 72.1227 19.0187 71.728 18.4C71.3333 17.7707 70.816 17.28 70.176 16.928C69.536 16.5653 68.768 16.384 67.872 16.384C66.7947 16.384 65.8667 16.6453 65.088 17.168C64.3093 17.6907 63.712 18.5333 63.296 19.696C62.88 20.8587 62.672 22.3947 62.672 24.304C62.672 27.184 63.1307 29.2693 64.048 30.56C64.976 31.84 66.2507 32.48 67.872 32.48C68.768 32.48 69.536 32.2773 70.176 31.872C70.816 31.456 71.3333 30.912 71.728 30.24C72.1227 29.5573 72.3947 28.8107 72.544 28H77.44C77.3013 29.0987 77.0347 30.1493 76.64 31.152C76.2453 32.144 75.6853 33.0293 74.96 33.808C74.2347 34.5867 73.3013 35.2 72.16 35.648C71.0187 36.096 69.6373 36.32 68.016 36.32C65.8613 36.32 64 35.8187 62.432 34.816C60.864 33.8133 59.6533 32.4053 58.8 30.592C57.9573 28.7787 57.536 26.6613 57.536 24.24C57.536 21.808 57.9573 19.7227 58.8 17.984C59.6427 16.2347 60.848 14.8907 62.416 13.952C63.984 13.0133 65.8507 12.544 68.016 12.544ZM80.9208 12.864H85.6248V32.048H95.6728V36H80.9208V12.864ZM98.7495 12.864H103.406V36H98.7495V12.864ZM117.377 12.544C119.116 12.544 120.663 12.896 122.017 13.6C123.383 14.2933 124.481 15.2427 125.313 16.448C126.156 17.6533 126.652 19.0133 126.801 20.528H121.905C121.756 19.728 121.484 19.0187 121.089 18.4C120.695 17.7707 120.177 17.28 119.537 16.928C118.897 16.5653 118.129 16.384 117.233 16.384C116.156 16.384 115.228 16.6453 114.449 17.168C113.671 17.6907 113.073 18.5333 112.657 19.696C112.241 20.8587 112.033 22.3947 112.033 24.304C112.033 27.184 112.492 29.2693 113.409 30.56C114.337 31.84 115.612 32.48 117.233 32.48C118.129 32.48 118.897 32.2773 119.537 31.872C120.177 31.456 120.695 30.912 121.089 30.24C121.484 29.5573 121.756 28.8107 121.905 28H126.801C126.663 29.0987 126.396 30.1493 126.001 31.152C125.607 32.144 125.047 33.0293 124.321 33.808C123.596 34.5867 122.663 35.2 121.521 35.648C120.38 36.096 118.999 36.32 117.377 36.32C115.223 36.32 113.361 35.8187 111.793 34.816C110.225 33.8133 109.015 32.4053 108.161 30.592C107.319 28.7787 106.897 26.6613 106.897 24.24C106.897 21.808 107.319 19.7227 108.161 17.984C109.004 16.2347 110.209 14.8907 111.777 13.952C113.345 13.0133 115.212 12.544 117.377 12.544ZM139.898 36.32C137.711 36.32 135.818 35.8453 134.218 34.896C132.629 33.936 131.397 32.576 130.522 30.816C129.658 29.0453 129.226 26.9333 129.226 24.48C129.226 22.016 129.663 19.8933 130.538 18.112C131.423 16.3307 132.666 14.96 134.266 14C135.866 13.0293 137.743 12.544 139.898 12.544C142.042 12.544 143.909 13.024 145.498 13.984C147.087 14.944 148.314 16.3147 149.178 18.096C150.053 19.8773 150.49 22.0053 150.49 24.48C150.49 26.9227 150.058 29.0293 149.194 30.8C148.341 32.5707 147.119 33.936 145.53 34.896C143.941 35.8453 142.063 36.32 139.898 36.32ZM139.898 32.48C141.029 32.48 142.005 32.2133 142.826 31.68C143.658 31.136 144.298 30.2827 144.746 29.12C145.194 27.9467 145.418 26.4213 145.418 24.544C145.418 22.6133 145.189 21.0507 144.73 19.856C144.282 18.6613 143.642 17.7867 142.81 17.232C141.989 16.6667 141.018 16.384 139.898 16.384C138.778 16.384 137.802 16.6667 136.97 17.232C136.138 17.7867 135.493 18.6667 135.034 19.872C134.575 21.0667 134.346 22.624 134.346 24.544C134.346 26.432 134.575 27.9573 135.034 29.12C135.493 30.2827 136.138 31.136 136.97 31.68C137.802 32.2133 138.778 32.48 139.898 32.48ZM169.17 12.864H173.842V36H169.634L158.642 20.08V36H153.986V12.864H158.61L169.17 28.176V12.864Z"
                    fill="white"
                  />
                </svg>
              </span>
            </h2>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            background="#001529"
            style={{ margin: '20px 0px' }}
            defaultSelectedKeys={['']}
            onClick={({ key }) => {
              if (key === 'signout') {
              } else {
                navigate(key);
              }
            }}
            items={[
              {
                key: '',
                icon: <AiOutlineDashboard className="fs-4" />,
                label: 'Dashboard',
              },
              {
                key: 'customers',
                icon: <AiOutlineUser className="fs-4" />,
                label: 'Customers',
              },
              {
                key: 'Catalog',
                icon: <AiOutlineShoppingCart className="fs-4" />,
                label: 'Catalog',
                children: [
                  {
                    key: 'product',
                    icon: <AiOutlineShoppingCart className="fs-4" />,
                    label: 'Add Product',
                  },
                  {
                    key: 'list-product',
                    icon: <AiOutlineShoppingCart className="fs-4" />,
                    label: 'Product List',
                  },
                  {
                    key: 'brand',
                    icon: <SiBrandfolder className="fs-4" />,
                    label: 'Brand',
                  },
                  {
                    key: 'list-brand',
                    icon: <SiBrandfolder className="fs-4" />,
                    label: 'Brand List ',
                  },
                  {
                    key: 'category',
                    icon: <BiCategoryAlt className="fs-4" />,
                    label: 'Category',
                  },
                  {
                    key: 'list-category',
                    icon: <BiCategoryAlt className="fs-4" />,
                    label: 'Category List',
                  },
                  {
                    key: 'color',
                    icon: <AiOutlineBgColors className="fs-4" />,
                    label: 'Color',
                  },
                  {
                    key: 'list-color',
                    icon: <AiOutlineBgColors className="fs-4" />,
                    label: 'Color List',
                  },
                ],
              },
              {
                key: 'orders',
                icon: <FaClipboardList className="fs-4" />,
                label: 'Orders',
              },
              {
                key: 'marketing',
                icon: <RiCouponLine className="fs-4" />,
                label: 'Marketing',
                children: [
                  {
                    key: 'coupon',
                    icon: <ImBlog className="fs-4" />,
                    label: 'Add Coupon',
                  },
                  {
                    key: 'coupon-list',
                    icon: <RiCouponLine className="fs-4" />,
                    label: 'Coupon List',
                  },
                ],
              },
              {
                key: 'blogs',
                icon: <FaBloggerB className="fs-4" />,
                label: 'Blogs',
                children: [
                  {
                    key: 'blog',
                    icon: <ImBlog className="fs-4" />,
                    label: 'Add Blog',
                  },
                  {
                    key: 'blog-list',
                    icon: <FaBloggerB className="fs-4" />,
                    label: 'Blog List',
                  },
                  {
                    key: 'blog-category',
                    icon: <ImBlog className="fs-4" />,
                    label: 'Add Blog Category',
                  },
                  {
                    key: 'blog-category-list',
                    icon: <FaBloggerB className="fs-4" />,
                    label: 'Blog Category List',
                  },
                ],
              },
              {
                key: 'enquiries',
                icon: <FaClipboardList className="fs-4" />,
                label: 'Enquiries',
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="d-flex justify-content-between ps-1 pe-5 h-auto"
            style={{
              padding: '6px 0',
              background: '#001529',
              height: '76px !important',
            }}
          >
            {/* {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            }
          )} */}
            <div></div>
            <div
              style={{ height: '64px' }}
              className="d-flex gap-2 align-items-center"
            >
              <div className="position-relative">
                <BiUserCircle className="fs-3 text-white" />
              </div>

              <div className="d-flex gap-3 align-items-center dropdown">
                <div
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className="text-white"
                >
                  <h5 className="mb-0">
                    {user?.firstname} {user?.lastname}
                  </h5>
                  <p className="mb-0">{user?.email}</p>
                </div>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  {/* <li>
                    <Link
                      className="dropdown-item py-1 mb-1"
                      style={{ height: 'auto', lineHeight: '20px' }}
                      to="/"
                    >
                      View Profile
                    </Link>
                  </li> */}
                  <li>
                    <button
                      className="dropdown-item py-1 mb-1"
                      style={{ height: 'auto', lineHeight: '20px' }}
                      onClick={() => {
                        localStorage?.removeItem('user');
                        window?.location?.reload();
                      }}
                    >
                      Signout
                    </button>
                  </li>
                </div>
              </div>
            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <ToastContainer
              position="top-right"
              autoClose={250}
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              theme="light"
            />
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </PrivateRoute>
  );
};
export default MainLayout;
