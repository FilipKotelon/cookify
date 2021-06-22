using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cookify.Models
{
    public class FavoriteRecipe
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string ApplicationUserId { get; set; }

        [ForeignKey("ApplicationUserId")]
        public ApplicationUser ApplicationUser { get; set; }

        [Required]
        public int RecipeId { get; set; }

        [ForeignKey("RecipeId")]
        public Recipe Recipe { get; set; }
    }
}