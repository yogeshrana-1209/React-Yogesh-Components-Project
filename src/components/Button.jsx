// import PropTypes from "prop-types";
import className from "classnames"; 

//Checking the CSS Properties for the button
// const finalClassName = className('px-1.5',{
//     'bg-blue-500' : true,
//     'text-yellow-500' : true,
// });

// console.log(finalClassName);

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
    outline,
    onClick,
    ...rest
}) {
    //console.log(rest);
    
    
    const classes = className(rest.className,'flex items-center px-3 py-1.5 border',{
        'border-blue-500 bg-blue-500 text-black': primary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-500 bg-yellow-500 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'border-gray-500 bg-gray-500 text-white': secondary,
        'rounded-full': rounded,
        'bg-white' : outline,
        'text-black' : outline,
    });

    // if (primary && secondary) {
    //     throw new Error('Button cannot be both primary and secondary');
    // }

    // let baseClassName = "px-3 py-1.5 border"
    // if(primary) {
    //     baseClassName += " bg-blue-500 text-white hover:bg-blue-700"
    // } else if (secondary) {
    //     baseClassName += " bg-gray-200 text-gray-700 hover:bg-gray-300"
    // }



    return  (
        <>
        <div className='flex justify-center space-x-4'>
        {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> */}
        {/* <button onClick={onClick} className={classes}> */}
        <button {...rest} className={classes}>
            {children}
        </button>
      </div>

        </>
    );
}

// Button.propTypes = {
//     checkVariationValue : ({primary,secondary,success,warning,danger}) => {
        //console.log(props);
        //return new Error('Invalid prop value');
//         const count = Number(!!primary)
//         + Number(!!secondary)
//         + Number(!!success) 
//         + Number(!!danger)
//         + Number(!!warning);

//         if (count > 1) {
//             return new Error(
//                 `Too many button variations used. Please use only one of primary, secondary, success, warning, danger.`
//             );
//         }
//     },
// };

export default Button;

