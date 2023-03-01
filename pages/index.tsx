

// const inter = Inter({ subsets: ['latin'] })

// function Heading(props){
//   return <div>
//     <style jsx>{
//       `
//       h3{
//         color: green;
//       }
//       `
//     }</style>
//     <h3>{props.heading}</h3>
//   </div>
// }


export default function Home() {
  const variables = Math.random() > 0.5 ? 'red': 'blue'
  return (
    <>
    <style jsx>
      {
        `
        .title{
          color: ${variables};
        }
        `
      }
    </style>
      <div>
    {/* <Heading heading="Heading"/> */}
        
        <h1 className='title'>Hello World</h1></div>
    </>
  )
}
