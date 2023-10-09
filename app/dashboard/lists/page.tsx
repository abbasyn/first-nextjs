import Link from "next/link";

const getApiData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

export default async function listofDataApi() {
  const myList = await getApiData();
  console.log(myList);

  return (
    <div className="p-3 ">
      <h4 className="font-bold pb-4">Server Side Data Fetching</h4>
      {myList.map((list: any) => {
        return (
          <p className="p-2 shadow ">
            <Link href={`/dashboard/lists/${list.id}`}>{list.name}</Link>
          </p>
        );
      })}
    </div>
  );
}
