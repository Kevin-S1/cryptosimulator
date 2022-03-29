using System.Text.Json.Serialization;
using System.Collections;
using System.ComponentModel.DataAnnotations;

namespace CryptoSimulator.Models;

public class Coin
{
    [Key]
    public int Id {get; set;}
    public string askPrice { get; set; }
    public float at { get; set; }
    public string baseAsset { get; set; }
    public string bidPrice { get; set; }
    public string highPrice { get; set; }
    public string lastPrice { get; set; }
    public string lowPrice { get; set; }
    public string openPrice { get; set; }
    public string quoteAsset { get; set; }
    public string symbol { get; set; }
    public string volume { get; set; }
    
}