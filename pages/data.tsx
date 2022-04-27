import type { NextPage } from 'next'

const dataPage: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">   
            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
            <div className="container ">
                <h1 className=" text-center text-3xl font-bold text-slate-800 mb-5">ARCHIEVE DATA</h1>






				<div className="flex justify-center">
  				<div className="mb-3 xl:w-96">
    <select className="form-select form-select-lg mb-3
      appearance-none
      block
      w-full
      px-4
      py-2
      text-xl
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-lg example">
        < option selected>Select Data</option>
        <option value="1">Country's GDP</option>
        <option value="2">IPL</option>
        <option value="3">Weather Condition</option>
		<option value="4">Others</option>
    </select>
	</div>
</div>




                {/* <div className="overflow-auto bg-gray-200 p-4 mx-16 text-justify mb-10">
                    <table className="text-left w-full justify-between overflow-y: auto bg-gray-200 p-4 mx-16 h-24 text-justify ">
		            <thead className="bg-black flex text-white w-150 overflow-y: auto ">
			        <tr className="flex w-full h-500 mb-4 ">
				        <th className="p-4 w-1/4">STATES</th>
				        <th className="p-4 w-1/4">GDP (Year 2020-2021)</th>
				        <th className="p-4 w-1/4">IPL AUCTION</th>
				        <th className="p-4 w-1/4">OTHERS</th>
			        </tr> */}
		            {/*<thead>
                    <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll  w-full">
			        <tr className="flex w-full mb-4">
				        <td className="p-4 w-1/4">Maharashtra</td>
				        <td className="p-4 w-1/4">₹32.24 lakh crore (US$430 billion)</td>
				        <td className="p-4 w-1/4">  </td>
				        <td className="p-4 w-1/4">  </td>
			        </tr>
                    <tr className="flex w-full mb-4">
				        <td className="p-4 w-1/4">Tamil Nadu</td>
				        <td className="p-4 w-1/4">₹22.44 lakh crore (US$297 billion)</td>
				        <td className="p-4 w-1/4">   </td>
				        <td className="p-4 w-1/4">   </td>
			        </tr>
                    <tr className="flex w-full mb-4">
				        <td className="p-4 w-1/4">Uttar Pradesh</td>
				        <td className="p-4 w-1/4">₹17.05 lakh crore (US$240 billion)</td>
				        <td className="p-4 w-1/4">  </td>
				        <td className="p-4 w-1/4">  </td>
			        </tr>
                    <tr className="flex w-full mb-4">
				        <td className="p-4 w-1/4">Gujarat</td>
				        <td className="p-4 w-1/4">₹16.48 lakh crore (US$230 billion)</td>
				        <td className="p-4 w-1/4">  </td>
				        <td className="p-4 w-1/4">  </td>
			        </tr>
                    <tr className="flex w-full mb-4">
				        <td className="p-4 w-1/4">Karnataka</td>
				        <td className="p-4 w-1/4">₹16.29 lakh crore (US$228 billion)</td>
				        <td className="p-4 w-1/4">  </td>
				        <td className="p-4 w-1/4">  </td>
			        </tr>
                    <tr className="flex w-full mb-4">
				        <td className="p-4 w-1/4">West Bengal</td>
				        <td className="p-4 w-1/4">₹13.54 lakh crore (US$181 billion)</td>
				        <td className="p-4 w-1/4">  </td>
				        <td className="p-4 w-1/4">  </td>
			        </tr>
                    <tr className="flex w-full mb-4">
				        <td className="p-4 w-1/4">Rajasthan</td>
				        <td className="p-4 w-1/4">₹10.21 lakh crore (US$140 billion)</td>
				        <td className="p-4 w-1/4">  </td>
				        <td className="p-4 w-1/4">  </td>
			        </tr>
			        <tr className="flex w-full mb-4">
				        <td className="p-4 w-1/4">Andhra Pradesh</td>
				        <td className="p-4 w-1/4">₹10.19 lakh crore (US$130 billion)</td>
				        <td className="p-4 w-1/4">  </td>
				        <td className="p-4 w-1/4">  </td>
			        </tr>
			        <tr className="flex w-full mb-4">
				        <td className="p-4 w-1/4">Kerala</td>
				        <td className="p-4 w-1/4">₹9.78 lakh crore (US$130 billion)</td>
				        <td className="p-4 w-1/4">  </td>
				        <td className="p-4 w-1/4">  </td>
			        </tr>
			        <tr className="flex w-full mb-4">
				        <td className="p-4 w-1/4">Telangana</td>
				        <td className="p-4 w-1/4">₹9.78 lakh crore (US$130 billion)</td>
				        <td className="p-4 w-1/4">  </td>
				        <td className="p-4 w-1/4">  </td>
			        </tr>
			<tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Madhya Pradesh</td>
				<td className="p-4 w-1/4">₹9.17 lakh crore (US$120 billion)</td>
				<td className="p-4 w-1/4">   </td>
				<td className="p-4 w-1/4">   </td>
			</tr>
			<tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Delhi</td>
				<td className="p-4 w-1/4">₹8.56 lakh crore (US$110 billion)</td>
				<td className="p-4 w-1/4">   </td>
				<td className="p-4 w-1/4">   </td>
			</tr>	
          	<tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Haryana</td>
				<td className="p-4 w-1/4">₹7.65 lakh crore (US$100 billion)</td>
				<td className="p-4 w-1/4">  </td>
				<td className="p-4 w-1/4">  </td>
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Bihar</td>
				<td className="p-4 w-1/4">₹7.57 lakh crore (US$99 billion)</td>
				<td className="p-4 w-1/4">  </td>
				<td className="p-4 w-1/4">  </td>
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Punjab</td>
				<td className="p-4 w-1/4">	₹5.41 lakh crore (US$71 billion)</td>
				<td className="p-4 w-1/4">  </td>
				<td className="p-4 w-1/4">  </td>
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Odisha</td>
				<td className="p-4 w-1/4">₹5.09 lakh crore (US$67 billion)</td>
				<td className="p-4 w-1/4">  </td>
				<td className="p-4 w-1/4">   </td>
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Assam</td>
				<td className="p-4 w-1/4">₹4.09 lakh crore (US$54 billion)</td>
				<td className="p-4 w-1/4">  </td>
				<td className="p-4 w-1/4">  </td>
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Chhattisgarh</td>
				<td className="p-4 w-1/4">₹3.50 lakh crore (US$46 billion)</td>
				<td className="p-4 w-1/4">  </td>
				<td className="p-4 w-1/4">  </td>
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Jharkhand</td>
				<td className="p-4 w-1/4">₹3.29 lakh crore (US$43 billion)</td>
				<td className="p-4 w-1/4">  </td>
				<td className="p-4 w-1/4">  </td>
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Uttarakhand</td>
				<td className="p-4 w-1/4">₹2.53 lakh crore (US$33 billion)</td>
				<td className="p-4 w-1/4">  </td>
				<td className="p-4 w-1/4">  </td>
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Jammu and Kashmir</td>
				<td className="p-4 w-1/4">₹1.76 lakh crore (US$23 billion)</td>
				<td className="p-4 w-1/4">  </td>
				<td className="p-4 w-1/4">  </td>
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Himachal Pradesh</td>
				<td className="p-4 w-1/4">₹1.56 lakh crore (US$20 billion)</td>
				<td className="p-4 w-1/4">  </td>
				<td className="p-4 w-1/4">  </td>
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Goa</td>
				<td className="p-4 w-1/4">₹0.815 lakh crore (US$11 billion)</td>
				<td className="p-4 w-1/4">  </td>
				<td className="p-4 w-1/4">  </td>
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Tripura</td>
				<td className="p-4 w-1/4">₹0.597 lakh crore (US$7.8 billion)</td>
				<td className="p-4 w-1/4">  </td>
				<td className="p-4 w-1/4">  </td>
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Chandigarh</td>
				<td className="p-4 w-1/4">₹0.421 lakh crore (US$5.5 billion)</td>
				<td className="p-4 w-1/4">  </td>
				<td className="p-4 w-1/4">  </td>
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Puducherry</td>
				<td className="p-4 w-1/4">₹0.380 lakh crore (US$5.0 billion)</td>
				<td className="p-4 w-1/4">  </td>
				<td className="p-4 w-1/4">   </td>
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Meghalaya</td>
				<td className="p-4 w-1/4">₹0.348 lakh crore (US$4.6 billion)</td>
				<td className="p-4 w-1/4">  </td>
				<td className="p-4 w-1/4">  </td>
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Sikkim</td>
				<td className="p-4 w-1/4">₹0.325 lakh crore (US$4.3 billion)</td>
				<td className="p-4 w-1/4">  </td>
				<td className="p-4 w-1/4">  </td>
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Nagaland</td>
				<td className="p-4 w-1/4">₹0.319 lakh crore (US$4.2 billion)</td>
				<td className="p-4 w-1/4">  </td>
				<td className="p-4 w-1/4">  </td>
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Manipur</td>
				<td className="p-4 w-1/4">₹0.318 lakh crore (US$4.2 billion)</td>
				<td className="p-4 w-1/4">  </td>
				<td className="p-4 w-1/4">  </td>
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Arunachal Pradesh</td>
				<td className="p-4 w-1/4">₹0.273 lakh crore (US$3.6 billion)</td>
				<td className="p-4 w-1/4">  </td>
				<td className="p-4 w-1/4">  </td>
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Mizoram</td>
				<td className="p-4 w-1/4">₹0.265 lakh crore (US$3.5 billion)</td>
				<td className="p-4 w-1/4">  </td>
				<td className="p-4 w-1/4">  </td>
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Andaman and Nicobar Islands</td>
				<td className="p-4 w-1/4">₹0.088 lakh crore (US$1.2 billion)</td>
				<td className="p-4 w-1/4">  </td>
				<td className="p-4 w-1/4">  </td>
			</tr>
            
		</tbody>
	</table>
				</div> */}
</div>
        <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
            <h2 className="text-center text-3xl font-bold text-slate-900 mb-5">Game Round-1</h2>
            <h2 className="text-center text-2xl font-bold text-slate-900 mb-5">
             Agenda -  To show states in south in a adverse manner.</h2>
            <div className="overflow-auto bg-gray-200 p-4 mx-16 h-24 text-justify mb-10">
            This is a comparison between 33 Indian states/UTs and countries/economies by GDP (Nominal), GDP
            (PPP), GDP per capita (Nominal) and GDP per capita (PPP). GDP and GDP per capita of economies are 
            based on World Bank. Latest year figures of states/UTs has been compared with countries of corresponding
            year. Equivalent countries names are according to closest figures. Rank has been calculated by inserting
            figures of states in corresponding world ranking.

            India's largest economy Maharashtra has GDP (nominal) of around 374 billion US Dollar and GDP (ppp) of 
            around 1,354 billion international dollar in 2017. Economy of Maharashtra is equivalent to Nigeria on 
            nominal basis and is equivalent to Thailand on ppp basis. If Maharashtra is included in gdp list of 
            2017, it would be at 31th and 19th position in nominal and ppp terms, respectively. As of 2018, Economy 
            of India's 2nd largest state Tamil Nadu is equivalent to Portugal (in nominal) and Argentina (in ppp).

           In nominal terms, Only top five states are in top 50 in world ranking. But in ppp terms, 13 states are 
           in top 50 in world ranking. Rank of Smallest economy A. and N. Islands is 184 in nominal 165 in ppp methods.

           When comparing Indian states with countries on GDP per capita basis, only three States/UTs : Goa, Delhi 
           and Sikkim has ranking above 100 in nominal. On ppp basis, only Goa is in top 50 and 7 states/Uts are in 
           top 100. India richest states Goa has GDP (nominal) per capita of around 7,045 US Dollar and GDP (ppp) 
           per capita of around 25,494 billion international dollar. Per capita Income of Goa is equivalent to 
           Dominica on nominal basis and is equivalent to Russian Federation on ppp basis. Poorest state Bihar is 
           equivalent to Togo (in nominal) and Yemen, Rep. (in ppp). In world ranking, Bihar is at 176th and 149th 
           position in nominal and ppp terms, respectively.
            </div>
   <h2 className="text-center text-xl font-bold text-slate-900 mb-2">20% of ......... contributes to 80% of ........</h2>
    </div>
            
    </main>  
    </div>

    )
}
export default dataPage