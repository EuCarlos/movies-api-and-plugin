export class Slug {
    public static stringToSlug(value: string): string {
    value = value.replace(/^\s+|\s+$/g, ''); // trim
    value = value.toLowerCase();
  
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        value = value.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    value = value.replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

    return value;
    }
}