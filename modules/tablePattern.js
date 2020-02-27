exports.tableAthletes = ` <div id="tableContainer"><table class="dataTable">
<tr>
  <th>First Name</th>
  <th>Last Name</th>
  <th>Test</th>
  <th>Result1</th>
  <th>Result2</th>
  <th>Result3</th>
</tr>

{%ATHLETESDATA%}
</table></div>
`;
exports.formEvent = `<form action="/getathletes/" id="formEvent">
<label for="Events">Choose an event:</label><br />
<select id="Events" name="Events">
  <option value="Long Jump">Long Jump</option>
  <option value="Running">Running</option>
  <option value="Pole Jump">Pole Jump</option>
  <option value="Shot Put">Shot Put</option>
  <option value="Swimming">Swimming</option>
</select>
<button type="submit">Choose</button>
</form>
<script>
      function myFunction() { 
        document.getElementById("Events").value = "{%EV%}";
      }
      myFunction();
      </script>`;
exports.cardTests = `<div class="cardsContainer">
 {%CARDS%}
</div>`;

exports.chartScript = `<script>var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Result1", "Result2", "Result3"],
    datasets: [
      {
        label: "{%LABEL%}",
        data: [{%R1%},{%R2%},{%R3%}],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    title:{ display:true,
    text: "{%fname%} {%lname%} - {%EVENT%}",
    fontSize: 16,
    
  },
    tooltips: {
      position: "nearest"
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
            
          }
        }
      ]
    }
  }
});</script>
<script>
      function myFunction() { 
        document.getElementById("athletes").value = "{%ATH%}";
        document.getElementById("Events").value = "{%EV%}";
      }
      myFunction();
    </script>`;
