import moment from 'moment';


function OrderDetailsHeader({ orders }) {

const formattedDate = moment(orders?.date).utc().format('DD/MM/YY')

  return (
    <section className="border border-top-0 border-left-0 border-right-0">
      <article className="container">
        <h4 className={"head-title mb-0 fw-6 text-center"}>
          Mohammadi Drug House
        </h4>
        <p className="text-center">
          <strong>Invoice</strong>
        </p>
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <p>
              <b>Order ID</b>
            </p>
            <p>
              <b>{orders?._id}</b>
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>
              <b>Order To</b>
            </p>
            <p>
              <b>{orders?.user?.pharmacyName}</b>
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>
              <b>Address</b>
            </p>
            <p>
              <b>{orders?.user?.address}</b>
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>
              <b>Number</b>
            </p>
            <p>
              <b>{orders?.user?.number}</b>
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>
              <b>Total</b>
            </p>
            <p>
              {/* <b>{new Date(orders?.date)}</b> */}
              <b>{orders?.cartTotal}</b>
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>
              <b>Date</b>
            </p>
            <p>
              <b>{formattedDate}</b>
            
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default OrderDetailsHeader;
