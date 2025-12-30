import RightCardContent from "./RightCardContent"

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative bg-amber-600 w-64 md:w-80 rounded-4xl'>
      <img className='h-full w-full object-cover ' src={props.img} alt="" />
      <RightCardContent tag={props.tag} id={props.id} color={props.color}/>
    </div>

  )
}

export default RightCard
