import { FC, Fragment, useContext, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Button } from './'

import logoCraftWorkers from '../assets/img/logo.png'
import { useNavigate } from 'react-router'
import { SessionContext } from '../context/sessionContext'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export const Navigation: FC = () => {
  const navigate = useNavigate()
  const { isLoggedIn, setIsLoggedIn } = useContext(SessionContext)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 py-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block h-10 w-auto cursor-pointer"
                src={logoCraftWorkers}
                alt="Workflow"
                onClick={() => navigate('/')}
              />
              {/* <h1 className="ml-6 font-bold text-gray-800">CraftWorkers</h1> */}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            {isLoggedIn ? (
              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 z-50 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700 cursor-pointer'
                          )}
                          onClick={() => setIsLoggedIn(false)}
                        >
                          Sign out
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <div className="flex gap-3">
                <Button onClickFn={() => navigate('/login')} isPrimary>
                  Iniciar Sesi??n
                </Button>
                <Button onClickFn={() => navigate('/register')}>
                  Reg??strate
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
