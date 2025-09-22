function FigureCard({image, title, description}) {
  return (
    <figure className="rounded-xl overflow-hidden shadow">
    <div className="h-40 bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
        <img src={image} alt={title} className="object-cover h-full w-full" />
    </div>
    <figcaption className="p-4 bg-white">
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-500 mt-1">{description}</div>
    </figcaption>
    </figure>
  );
}   
export default FigureCard;  