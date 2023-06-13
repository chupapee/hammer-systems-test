const { useState, useEffect } = require( 'react' );
const { getCustomers } = require( '../api/apiService' );

export const useCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setIsPending(true);
        const data = await getCustomers();
        setCustomers(data);
      } catch (error) {
        setError("Oops... Something went wrong!");
      } finally {
        setIsPending(false);
      }
    };

    fetchCustomers();
  }, []);

  return { customers, isPending, error };
};
