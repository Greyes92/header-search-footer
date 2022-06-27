import React from 'react'

function StoreLocator() {
  return (
    <div className="store-locator">
              <svg
                aria-hidden="true"
                role="img"
                viewBox="0 0 100 100"
                width="30"
                height="31"
                fill="#fff"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M28.9 11.92h-3.78a.98.98 0 0 0 0 1.96h3.79c.14 0 .25.12.25.25V28c0 .14-.11.26-.25.26h-5.03v-4.6c0-.84-.68-1.52-1.52-1.52h-9.72c-.82 0-1.44.65-1.44 1.52v4.6H6.24a.27.27 0 0 1-.27-.27V16.47h15.7c.54 0 .98-.44.98-.98V2.84a.98.98 0 0 0-.98-.97H5.8c-.25 0-.49.1-.67.26L1.2 5.85c-.2.19-.3.45-.3.72v5.1c0 .26.1.51.3.7l2.84 2.77c0 .05-.03.09-.03.14v12.7c0 1.23 1 2.23 2.23 2.23H28.9c1.22 0 2.2-1 2.2-2.21V14.13a2.2 2.2 0 0 0-2.2-2.2zM2.86 7 6.2 3.82h14.5v10.69H6.2l-3.35-3.26V7zm19.08 21.27h-3.48V24.1h3.48v4.16zm-8.78-4.16h3.34v4.16h-3.34V24.1zM6.38 9.06a.98.98 0 0 1-1.96 0c0-.54.45-.98.98-.98.55 0 .98.44.98.98z"></path>
                </svg>
              </svg>
              <span
                className="store-display-name"
                data-cy="location-tooltip-lv-display-name"
              >
                Killeen
              </span>
            </div>
  )
}

export default StoreLocator