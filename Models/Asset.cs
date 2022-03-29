using System.ComponentModel.DataAnnotations;

namespace CryptoSimulator.Models;

public class Asset
{
    [Key]
    public int Id { get; set; }
    public string PurchasePrice { get; set; }
    public float PurchaseDate { get; set; }
    public bool Sold { get; set; } = false;
}