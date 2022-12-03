import { useRef, useState } from "react";

function Partner({ num, setPartnersInfo, partnersInfo }) {
  const ref1 = useRef();
  const [data, setData] = useState({
    full_name: "",
    born_date: "",
    email: "",
    phone_number: "",
    whatsapp_number: "",
    landline_number: "",
    rate: "",
  });

  return (
    <div className="my-4">
      <h3
        className="my-2"
        style={{ color: "#fff", borderBottom: "2px solid #fff" }}
      >
        {" "}
        Information Partner({num + 1})
      </h3>
      <div className="my-3 input_">
        <input
          value={data.full_name}
          onChange={(e) => {
            setData({ ...data, full_name: e.target.value });
            const partnersInfoList = partnersInfo.map((data) => data);
            partnersInfoList[num] = { ...data, full_name: e.target.value };
            setPartnersInfo(partnersInfoList);
          }}
          type="text"
          placeholder="Partner's full name"
        />
        <p></p>
      </div>
      <div className="my-3 input_">
        <input
          value={data.born_date}
          onChange={(e) => {
            setData({ ...data, born_date: e.target.value });
            const partnersInfoList = partnersInfo.map((data) => data);
            partnersInfoList[num] = { ...data, born_date: e.target.value };
            setPartnersInfo(partnersInfoList);
          }}
          className="input"
          ref={ref1}
          onFocus={() => (ref1.current.type = "date")}
          onBlur={() => (ref1.current.type = "text")}
          placeholder="Born date"
          type="text"
        />
      </div>
      <div className="my-3 input_">
        <input
          value={data.phone_number}
          onChange={(e) => {
            setData({ ...data, phone_number: e.target.value });
            const partnersInfoList = partnersInfo.map((data) => data);
            partnersInfoList[num] = { ...data, phone_number: e.target.value };
            setPartnersInfo(partnersInfoList);
          }}
          type="number"
          placeholder="Personal mobile number"
        />
        <p></p>
      </div>
      <div className="my-3 input_">
        <input
          value={data.whatsapp_number}
          onChange={(e) => {
            setData({ ...data, whatsapp_number: e.target.value });
            const partnersInfoList = partnersInfo.map((data) => data);
            partnersInfoList[num] = {
              ...data,
              whatsapp_number: e.target.value,
            };
            setPartnersInfo(partnersInfoList);
          }}
          type="number"
          placeholder="Whatsapp number"
        />
        <p></p>
      </div>
      <div className="my-3 input_">
        <input
          value={data.landline_number}
          onChange={(e) => {
            setData({ ...data, landline_number: e.target.value });
            const partnersInfoList = partnersInfo.map((data) => data);
            partnersInfoList[num] = {
              ...data,
              landline_number: e.target.value,
            };
            setPartnersInfo(partnersInfoList);
          }}
          type="number"
          placeholder="Landline extention"
        />
        <p></p>
      </div>
      <div className="my-3 input_">
        <input
          value={data.email}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
            const partnersInfoList = partnersInfo.map((data) => data);
            partnersInfoList[num] = { ...data, email: e.target.value };
            setPartnersInfo(partnersInfoList);
          }}
          type="email"
          placeholder="Personal email address"
        />
        <p></p>
      </div>
      <div className="my-3 input_">
        <input
          value={data.rate}
          onChange={(e) => {
            setData({ ...data, rate: e.target.value });
            const partnersInfoList = partnersInfo.map((data) => data);
            partnersInfoList[num] = { ...data, rate: e.target.value };
            setPartnersInfo(partnersInfoList);
          }}
          type="number"
          placeholder="Participation rate"
        />
        <p></p>
      </div>
    </div>
  );
}

export default Partner;
