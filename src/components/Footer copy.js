// import React, { useState }from 'react'
// import { Flex, FloatingBall, Toast } from 'react-vant'
// import { Chat, StarO,
//   CartCircleO,
//   GoldCoinO,
//   WapHomeO,
//   Plus,
//   ChatO,} from '@react-vant/icons'
// import clsx from 'clsx'
// import './footer.less'


// const icons = [StarO, CartCircleO, GoldCoinO, WapHomeO, ChatO]

// export default ({ menu = {}, ...props }) => {
  
//   function hendlerClick(x){
//     console.log(x)
//     if(x==1){
//       window.location.pathname = '/home';
//     }
//     console.log(x)
//     if(x==2){
//       window.location.pathname = '/module';
//     }
//     console.log(x)
//     if(x==3){
//       window.location.pathname = '/materi';
//     }
//     console.log(x)
//     if(x==4){
//       window.location.pathname = '/soal';
//     }
//     console.log(x)
//     if(x==5){
//       window.location.pathname = '/chat';
//     }
//   }

//   return (
//     <FloatingBall
//       className='demo-floating-box-menu'
//       offset={{
//         right: 20,
//         bottom: '10vh',
//       }}
//       menu={{
//         ...menu,
//         items: icons.map((Ico, i) => (
//           <Flex
//             align='center'
//             justify='center'
//             onClick={() => hendlerClick(`${i + 1}`)}
//             key={i}
//             className='menu-item'
//           >
//             <Ico />
//           </Flex>
//         )),
//       }}
//       {...props}
//     >
//       {({ active }) => (
//         <Flex
//           align='center'
//           justify='center'
//           className={clsx('main-button', {
//             'main-button--active': active,
//           })}
//         >
//           <Plus/>
//         </Flex>
//       )}
//     </FloatingBall>
//   )
// }
