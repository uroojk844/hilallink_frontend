
const PeopleCard = ({index}) => {
  return (
    <div className="bg-white p-4 border-b">
      <div className="flex gap-2 items-center">
        <img
          src={`https://picsum.photos/400?${index}`}
          className="h-14 w-14 rounded-full object-contain"
          alt=""
        />
        <div>
          <div className="font-medium">Mohd Belal Naim</div>
          <div className="text-sm text-gray-500">@BelalNaim9</div>
        </div>
      </div>
      <div className="text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
        exercitationem eum, sapiente architecto tenetur porro esse?
      </div>
    </div>
  );
}

export default PeopleCard