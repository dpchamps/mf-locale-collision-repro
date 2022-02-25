# potentially unexpected output given the "*" key

- npm install
- node index.js

### output:

```javascript
const date_es_EEEMMMd_m7z124 = (function() {
  var opt = {"weekday":"short","month":"short","day":"numeric"};
  var dtf = new Intl.DateTimeFormat("es", opt);
  return function(value) { return dtf.format(value); }
})();
const date_fi_EEEMMMd_xrn29d = (function() {
  var opt = {"weekday":"short","month":"short","day":"numeric"};
  var dtf = new Intl.DateTimeFormat("fi", opt);
  return function(value) { return dtf.format(value); }
})();
export default {
  en: {
    es: (d) => "Estimation Date: " + date_es_EEEMMMd_m7z124(d.date),
    fi: (d) => "Financial Incentive Date: " + date_fi_EEEMMMd_xrn29d(d.date)
  }
}
```