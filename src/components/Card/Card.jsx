const Card = ({course}) => {

      const {thumbnail, title, description, price, credit } = course;

    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={thumbnail} alt=" " class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{title}</h2>
                <p>{description}</p>
                <div class="card-actions w-full">
                <button class="btn btn-accent w-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;