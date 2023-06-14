/* eslint-disable react/prop-types */
export default function ServiceBox(props) {
  const title = props.title;
  const body = props.body;
  const icon = props.icon;
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          className="mb-4 rounded-[20px] service-box  bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
        >
          <div className="bg-primary mb-4 flex ">
            {icon}
          </div>
          <h4 className="text-dark mb-3 text-xl font-semibold">
            {title}
          </h4>
          <p className="text-body-color">
            {body}
          </p>
        </div>
      </div>
    </>
  );
}
