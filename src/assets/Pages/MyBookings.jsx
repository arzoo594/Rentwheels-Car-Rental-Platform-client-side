import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:5000/bookings/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching bookings:", err);
        setLoading(false);
      });
  }, [user?.email]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg font-semibold">Loading your bookings...</p>
      </div>
    );
  }

  if (!bookings || bookings.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold">No Bookings Found 😔</h2>
        <p className="text-gray-500 mt-2">You haven’t booked any car yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Bookings</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="border rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-xl transition"
          >
            <img
              src={
                booking.carImage ||
                booking.imageUrl ||
                "https://via.placeholder.com/400x250?text=Car+Image"
              }
              alt={booking.carName}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {booking.carName || "Car Name Not Found"}
              </h2>
              <p className="text-gray-600 mt-1">
                <strong>Location:</strong> {booking.location || "N/A"}
              </p>
              <p className="text-gray-600">
                <strong>Rent:</strong> ${booking.rentPrice || "N/A"}/day
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Booked on:{" "}
                {booking.bookedAt
                  ? new Date(booking.bookedAt).toLocaleDateString()
                  : "N/A"}
              </p>

              <div className="mt-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    booking.status === "Booked"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {booking.status || "Booked"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
