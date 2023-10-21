type RanksProps = {
    name: string;
    date: string;
}


const Ranks = (props: RanksProps) => {
  return (
    <div>{props.name}</div>
  )
}

export default Ranks