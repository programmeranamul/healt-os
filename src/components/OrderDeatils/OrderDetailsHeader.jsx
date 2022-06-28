

function OrderDetailsHeader() {
  return (
    <section className="border border-top-0 border-left-0 border-right-0">
      <article className="container">
        <h4 className={"head-title mb-0 fw-6 text-center"}>Order Details</h4>
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <p>
              <b>Order ID</b>
            </p>
            <p>
              <b>53415</b>
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>
              <b>Order To</b>
            </p>
            <p>
              <b>HealthOS</b>
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>
              <b>Date</b>
            </p>
            <p>
              <b>22-09-2002</b>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default OrderDetailsHeader;
