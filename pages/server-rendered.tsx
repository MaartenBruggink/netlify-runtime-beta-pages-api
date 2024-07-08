const SearchWrapper = ({ value }: { value: string }) => {
  return (
    <main>
      <span>{value}</span>
    </main>
  );
};

export async function getServerSideProps({ res, query }: any) {
  res.setHeader(
    "Cache-Control",
    `s-maxage=21600, stale-while-revalidate=518400`
  );

  return {
    props: {
      value: query?.value || "fallback",
    },
  };
}

export default SearchWrapper;
