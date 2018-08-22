﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace KimppakyytiApi.Models
{
    public class GoogleApiFunctions
    {
        private readonly static HttpClient _googleClient = new HttpClient();
        public static async Task<string> GetRouteGoogle(string from, string to)
        {
            string response = await _googleClient.GetStringAsync($"https://maps.googleapis.com/maps/api/directions/json?origin={from}&destination={to}&key=Y");
            return response;
        }
    }
}
