import React, { useState } from 'react'
import classNames from 'classnames'

export const CookButton = ({
  icon,
  size,
  className,
  enable,
  onClick,
  label,
  selected, // New prop for conditional styling
  options
}) => {
  const [showOption, setShowOption] = useState(false)
  const buttonClasses = classNames(
    'mainBtn',
    {
      smallButton: size === 'small',
      mediumButton: size === 'medium',
      largeButton: size === 'large',
      selected: selected,
      deselected: !selected
    },
    className
  )

  return (
    <div
      className={`${buttonClasses} ${enable ? 'pointer' : 'not_allowed'}`}
      onClick={enable ? onClick : undefined}
    >
      {icon && <img src={icon} alt='button icon' />}
      {options ? (
        <>
          <span
            onClick={e => {
              e.stopPropagation()
              setShowOption(!showOption)
            }}
            className='innerButton'
          >
            {label}
          </span>
          {showOption && (
            <div className='options'>
              {options.map((item, index) => (
                <div
                  key={index}
                  className='optionitem'
                  onClick={() => {
                    setShowOption(false)
                    console.log(`${item} selected`)
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <span className='innerButton'>{label}</span>
      )}
    </div>
  )
}