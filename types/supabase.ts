export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      institution: {
        Row: {
          city: string | null
          country: string | null
          created_at: string
          id: number
          name: string | null
          notes: string | null
          state: string | null
          type: Database["public"]["Enums"]["institution_types"] | null
        }
        Insert: {
          city?: string | null
          country?: string | null
          created_at?: string
          id?: number
          name?: string | null
          notes?: string | null
          state?: string | null
          type?: Database["public"]["Enums"]["institution_types"] | null
        }
        Update: {
          city?: string | null
          country?: string | null
          created_at?: string
          id?: number
          name?: string | null
          notes?: string | null
          state?: string | null
          type?: Database["public"]["Enums"]["institution_types"] | null
        }
        Relationships: []
      }
      programs: {
        Row: {
          abbreviation: string | null
          country: string | null
          created_at: string
          degree_subject_area: Database["public"]["Enums"]["major_types"]
          degree_type: Database["public"]["Enums"]["degree_type"]
          id: number
          image: string | null
          institution: number
          level: Database["public"]["Enums"]["degree_level"] | null
          link: string | null
          name: string
          notes: string | null
        }
        Insert: {
          abbreviation?: string | null
          country?: string | null
          created_at?: string
          degree_subject_area: Database["public"]["Enums"]["major_types"]
          degree_type: Database["public"]["Enums"]["degree_type"]
          id?: number
          image?: string | null
          institution: number
          level?: Database["public"]["Enums"]["degree_level"] | null
          link?: string | null
          name?: string
          notes?: string | null
        }
        Update: {
          abbreviation?: string | null
          country?: string | null
          created_at?: string
          degree_subject_area?: Database["public"]["Enums"]["major_types"]
          degree_type?: Database["public"]["Enums"]["degree_type"]
          id?: number
          image?: string | null
          institution?: number
          level?: Database["public"]["Enums"]["degree_level"] | null
          link?: string | null
          name?: string
          notes?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_programs_institution_fkey"
            columns: ["institution"]
            isOneToOne: false
            referencedRelation: "institution"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      degree_level:
        | "BACHELORS"
        | "MASTERS"
        | "PHD"
        | "POSTDOC"
        | "ASSOCIATES"
        | "CERTIFICATE"
        | "MINOR"
        | "FOCUS"
        | "OTHER"
      degree_type: "BA" | "BS" | "BFA" | "BArch" | "MS" | "MA" | "MFA" | "MBA"
      institution_types:
        | "COLLEGE"
        | "UNIVERSITY"
        | "TECHNICAL"
        | "TRADE"
        | "COMMUNITY"
      major_types:
        | "DESIGN"
        | "ENGINEERING"
        | "ARTS"
        | "SCIENCE"
        | "IT"
        | "OTHER"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
